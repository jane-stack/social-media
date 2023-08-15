class WelcomeMailer < ApplicationMailer
    default from: 'ljadept@gmail.com'

    def welcome_email
        @user = params[:user]
        mail(to: @user.email, subject: "Welcome to Random Posts")
    end
end
