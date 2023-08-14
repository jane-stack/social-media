class UserMailer < ApplicationMailer
    default from: 'ljadept@gmail.com'

    def welcome(user)
        @user = user
        mail(to: @user.email, subject: 'Welcome to Random Posts')
    end
end
