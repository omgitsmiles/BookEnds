class BooksController < ApplicationController
    before_action :authorize, only: :create

    def index
        books = Book.all
        render json: books, include: :reviews, status: 200
    end

    def create
        book = Book.create!(book_params)
        render json: book, status: 201
    end

    def show
        book = Book.find(params[:id])
        render json: book, status: 200
    end
    
    private

    def authorize 
        render json: { errors: ["Must be logged in to add a book!"] }, status: 401 unless session[:user_id]
    end
    
    def book_params
        params.permit(:title, :author, :genre, :description, :book_img)
    end

end


