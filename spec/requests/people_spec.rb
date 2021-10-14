require 'rails_helper'

describe 'People API', type:  :request do
  it 'returns all people' do
    FactoryBot.create(:person, first_name:'Jar Jar', last_name: 'Binks')
    FactoryBot.create(:person, first_name:'Han', last_name: 'Solo')

    get '/api/v1/people'
    
    # p JSON.parse(response.body)

    expect(response).to have_http_status(:success) 
    expect((JSON.parse(response.body))['data'].size).to eq(2) 
  end

  it 'restuns 3 people only per page' do
    FactoryBot.create(:person, first_name:'Jar Jar', last_name: 'Binks')
    FactoryBot.create(:person, first_name:'Han', last_name: 'Solo')
    FactoryBot.create(:person, first_name:'Boba', last_name: 'Fett')
    FactoryBot.create(:person, first_name:'Mace', last_name: 'Windu')
    FactoryBot.create(:person, first_name:'Sheev', last_name: 'Palpatine')
    FactoryBot.create(:person, first_name:'Obi-wan', last_name: 'Kenobi')

    get '/api/v1/people?page[number]=1&page[size]=3'

    expect((JSON.parse(response.body))['data'].size).to eq(3)

  end

end