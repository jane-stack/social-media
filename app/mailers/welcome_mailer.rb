class WelcomeMailer < ApplicationMailer
    def welcome_email
        @user = params[:user]
        mail(to: @user.email, subject: "Welcome to Random Posts")
    end
end
