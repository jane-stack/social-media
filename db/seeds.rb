# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
Post.destroy_all
Like.destroy_all
Comment.destroy_all

# Users
jane = User.create(name: "Jane Nguyen", username: "janeur", email: "jane_nguyen@email.com", password: "Test1234#")
tuyen = User.create(name: "Tuyen Ha", username: "tha", email: "tuyen_ha@email.com", password: "Test1234#")
adalyn = User.create(name: "Adalyn Huynh", username: "addyh", email: "adalyn_huynh@email.com", password: "Test1234#")

# Posts
p1 = Post.create(title: "Almost There", content: "This adventure has been a rollercoaster ride, brimming with both exasperation and exhilaration! The prospect of reaching the end and propelling forward fills me with sheer delight.", creator: jane)
p2 = Post.create(title: "Hike is Life!", content: "I cannot contain my excitement as I proudly declare that I am about to conquer my first ever 13er hike in the majestic Colorado mountains! The thrill coursing through me is indescribable, and I can hardly wait to embark on this extraordinary adventure!", creator: tuyen)

# Comments
c1 = Comment.create(body: "This is exciting! I wish you nothing but success going forward!", user: tuyen, post: p1)
c2 = Comment.create(body: "So cool! Take me with you next time!", user: adalyn, post: p2)
