class WelcomeMailer < ApplicationMailer
    default from: 'ljadept@gmail.com'

    def welcome_email
        @user = params[:user]
        mail(to: @user.email, subject: "Welcome to Social Media Demo")
    end
end
