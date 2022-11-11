class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_not_processable

  private

  def render_not_processable(invalid)
    render json: { errors: [invalid.records.errors.full_messages] }, status: 422
  end

end
