class BooksController < ApplicationController
    # before_action :authorize, only: :create

    def index
        books = Book.all
        render json: books, status: 200
    end

    def create
        # user = User.find_by(id: session[:user_id])
        book = Book.create!(book_params)
        render json: book, status: 201
    end

    def show
        render json: find_book, status: 200
    end

    def update
        find_book.update!(book_params)
        render json: book, status: 202
    end

    private

    def authorize 
        render json: { errors: ["Must be logged in to add a book!"] }, status: 401 unless session[:user_id]
    end

    def find_book
        Book.find(params[:id])
    end
    
    def book_params
        params.permit(:title, :author, :genre, :description, :book_img)
    end

end


