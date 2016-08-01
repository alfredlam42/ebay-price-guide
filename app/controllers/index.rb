get '/' do
  erb :'/index'
end

get '/search' do
  item = params[:item].split(' ').join('+')
  #starting path
  path = 'http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME='

  path += params[:completed] ? 'findCompletedItems' : 'findItemsByKeywords'

  path += '&SERVICE-VERSION=1.7.0'
  path += '&SECURITY-APPNAME=' + ENV['DEV_ID']
  path += '&RESPONSE-DATA-FORMAT=XML'
  path += '&REST-PAYLOAD'
  path += '&keywords=' + item
  path += '&itemFilter(0).name=MinPrice'
  path += '&itemFilter(0).value='
  path += params[:retailPrice].to_i > 0 ? params[:retailPrice] : '0'
  path += '&itemFilter(0).paramName=Currency'
  path += '&itemFilter(0).paramValue=USD'

  if params[:completed]
    path += '&itemFilter(1).name=SoldItemsOnly'
    path += '&itemFilter(1).value=true'
    path += '&sortOrder=StartTimeNewest'
    path += '&paginationInput.entriesPerPage=50'
  else
    path += '&itemFilter(1).name=ListingType'
    path += '&itemFilter(1).value=FixedPrice'
    path += '&sortOrder=PricePlusShippingLowest'
    path += '&paginationInput.entriesPerPage=50'
  end

  response = HTTParty.get(path)
  response.to_json
end
