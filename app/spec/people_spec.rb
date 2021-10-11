require 'rails_helper'

describe 'People API', type: :request do
  describe 'GET /people' do
    it 'returns a subset of people based on pagination' do
        get '/api/v1/people', params: {limit: 1}

    end
  end

end