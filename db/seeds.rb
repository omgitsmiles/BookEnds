# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ title: 'Star Wars' }, { title: 'Lord of the Rings' }])
#   Character.create(title: 'Luke', movie: movies.first)
puts "seeding..."
User.destroy_all
Book.destroy_all
Review.destroy_all

puts "seeding books..."
Book.create(title: "A Tale of Two Cities", author: "Charles Dickens", genre: "Classics", description: "A Tale of Two Cities is Charles Dickens’s great historical novel, set against the violent upheaval of the French Revolution. The most famous and perhaps the most popular of his works, it compresses an event of immense complexity to the scale of a family history, with a cast of characters that includes a bloodthirsty ogress and an antihero as believably flawed as any in modern fiction.")
Book.create(title: "The Picture of Dorian Gray", author: "Oscar Wilde", genre: "Gothic", description: "Oscar Wilde’s only novel is the dreamlike story of a young man who sells his soul for eternal youth and beauty.")
Book.create(title: "Invisible Monsters", author: "Chuck Palahniuk", genre: "Mystery, Horror", description: "She's a fashion model who has everything: a boyfriend, a career, a loyal best friend. But when a sudden freeway accident leaves her disfigured and incapable of speech, she goes from being the beautiful center of attention to being an invisible monster, so hideous that no one will acknowledge that she exists.")
Book.create(title: "The Kite Runner", author: "Khaled Hosseini", genre: "Historical Fiction", description: "1970s Afghanistan: Twelve-year-old Amir is desperate to win the local kite-fighting tourtitlent and his loyal friend Hassan promises to help him. But neither of the boys can foresee what would happen to Hassan that afternoon, an event that is to shatter their lives.")
Book.create(title: "1Q84", author: "Haruki Murakami", genre: "Magical Realism", description: "A young woman titled Aomame follows a taxi driver’s enigmatic suggestion and begins to notice puzzling discrepancies in the world around her. She has entered, she realizes, a parallel existence, which she calls 1Q84 —“Q is for ‘question mark.’ A world that bears a question.”")

puts "done!"