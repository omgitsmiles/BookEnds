# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ title: 'Star Wars' }, { title: 'Lord of the Rings' }])
#   Character.create(title: 'Luke', movie: movies.first)

# User.destroy_all
Book.destroy_all
Review.destroy_all

puts "seeding books..."
Book.create(title: "A Tale of Two Cities", author: "Charles Dickens", genre: "Classics", description: "A Tale of Two Cities is Charles Dickens’s great historical novel, set against the violent upheaval of the French Revolution. The most famous and perhaps the most popular of his works, it compresses an event of immense complexity to the scale of a family history, with a cast of characters that includes a bloodthirsty ogress and an antihero as believably flawed as any in modern fiction.", book_img: "https://www.ruthklein.com/wp-content/uploads/2015/05/file2.jpg")
Book.create(title: "The Picture of Dorian Gray", author: "Oscar Wilde", genre: "Gothic", description: "Oscar Wilde’s only novel is the dreamlike story of a young man who sells his soul for eternal youth and beauty.")
Book.create(title: "Invisible Monsters", author: "Chuck Palahniuk", genre: "Mystery, Horror", description: "She's a fashion model who has everything: a boyfriend, a career, a loyal best friend. But when a sudden freeway accident leaves her disfigured and incapable of speech, she goes from being the beautiful center of attention to being an invisible monster, so hideous that no one will acknowledge that she exists.")
Book.create(title: "The Kite Runner", author: "Khaled Hosseini", genre: "Historical Fiction", description: "1970s Afghanistan: Twelve-year-old Amir is desperate to win the local kite-fighting tourtitlent and his loyal friend Hassan promises to help him. But neither of the boys can foresee what would happen to Hassan that afternoon, an event that is to shatter their lives.")
Book.create(title: "1Q84", author: "Haruki Murakami", genre: "Magical Realism", description: "A young woman titled Aomame follows a taxi driver’s enigmatic suggestion and begins to notice puzzling discrepancies in the world around her. She has entered, she realizes, a parallel existence, which she calls 1Q84 —'Q is for ‘question mark.’ A world that bears a question.”")
Book.create(title: "The Hitchhikers Guide To The Galaxy", author: "Douglas Adams", genre: "Science Fiction", description: "Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of the The Hitch Hiker's Guide to the Galaxy who, for the last fifteen years, has been posing as an out of work actor.")

puts "seeding reviews..."
Review.create(review: "a light 1", rating: 1, user_id: 1, book_id: 1)
Review.create(review: "Chuck P is crazy for this one", rating: 4, user_id: 1, book_id: 3)
Review.create(review: "Forgot what its about", rating: 2, user_id: 2, book_id: 2)
Review.create(review: "Impactful book", rating: 5, user_id: 1, book_id: 4)

puts "done!"