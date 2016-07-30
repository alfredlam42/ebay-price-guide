get '/' do
  erb :'/index'
end

get '/search' do
  item = params[:item].split(' ').join('+')

  if params[:completed]
    path = 'http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=' + ENV['DEV_ID'] + '&RESPONSE-DATA-FORMAT=XML&REST-PAYLOAD&keywords=' + item + '&itemFilter(0).name=SoldItemsOnly&itemFilter(0).value=true&sortOrder=StartTimeNewest&paginationInput.entriesPerPage=50'
  else
    path = 'http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=' + ENV['DEV_ID'] + '&RESPONSE-DATA-FORMAT=XML&REST-PAYLOAD&keywords=' + item + '&itemFilter(0).name=ListingType&itemFilter(0).value=FixedPrice&sortOrder=PricePlusShippingLowest&paginationInput.entriesPerPage=50'
  end

  response = HTTParty.get(path)
  response.to_json
end
