Not Fast Just Furious Banking App

Description

This is a banking application that enables its users to upload, transfer and save their money to either a checking or savings account. As in other fields of business, banking organizations’ customers’ experience is improved by having an online presence. To name a few notable features, online banks enable bank customers to more readily check their balances and transfer money between accounts saving them much time from potentially long lines either at the bank or over the phone for these same tasks. Considering this, we’ve prepared this app as an exercise to briefly replicate these transactions.


User Story

I am an upcoming adult. I want to get an online bank account to keep 
track of my finances at my convenience. In this bank account, I must
be able to add money, view my transaction history and transfer
money between my personal accounts. There must be options to have either
a savings or debit account. When I sign up, I can save my login
information. When I log in, the login page will take me to my homepage
showing me my account balance.


Usage

1. Download and Sign-up for needed pages:
    1.	Sign-up for a GitHub account. (github.com)
    2.	Download and install git bash. (https://git-scm.com/downloads)
    3.	Download and install node. (https://nodejs.org/en/download/)
    4.	Download and install MySQL and MySQL Workbench. (https://www.mysql.com/downloads/)
    5.	Download and install VSCode. (https://code.visualstudio.com/download)
2. Host banking app page.
    Set-up
    1. Clone this banking app from GitHub to your git bash terminal.
	2. In the git bash terminal, navigate into the banking directory subfolder “banking-system/banking_system”.
    3.	Install all dependencies listed in the dependencies section of this README
    4.	In the object titled “database” in the “config.json” file in the config folder, change the password to the password you use for your MySQL account.
    5.	In the MySQL workbench, prepare an empty database called “banking_system”
3. Deploy
    1.	In either git bash, domain or VS Code terminal:
        i.	If using a local computer as host:
            1.	Run the server by typing “node server.js”
        ii.	If using Heroku:
            1.	Sign-up for a Heroku account. (https://signup.heroku.com/)
            2.	Download and install Heroku CLI. (https://devcenter.heroku.com/articles/heroku-cli)
            3.	Deploy app to Heroku
            Create Heroku link
                a.	In git bash terminal, type:
                i.	“heroku login” ENTER. Follow prompts to login.
                ii.	“heroku create” ENTER.
            Provision JawsDB
                b.	Go to “dashboard.heroku.com”. Search for the Heroku URL generated in the previous step.
                c.	Click on the link for that URL.
                d.	Click “Configure Add-ons”
                e.	In the “Find Add-ons” search field, type “JawsDB”. Select the MySQL version.
                f.	Submit order form for free version.
            Run App
                g.	Click Open App
4. Use
    1. On Home page:
    Sign up with email and password of choice OR click “here” where it notes “login here” to login with previously submitted email and password.

    2. Banking App Page:
        1. In either the Checking Balance or Savings Balance field, input the fiscal amount you intend to deposit to either account and click submit. This will update your savings and checking accounts respectively. If you hover over the right sides of these two fields, you also have the option to either increase or decrease the amount entered using the up- and down-facing arrows. This arrow feature is the same throughout all pages of this app.

        2. Once you have submitted your first deposit, Both the Checking and Savings Account Balances will display with the current balance and an "Amount" just beneath their title. Under the "Amount" field, will be a drop-down button by which you can either select to deposit, transfer, or withdraw money. On this updated page, enter the amount you wish to transfer to, deposit to or withdraw from either account in the "Account" field; select either deposit, transfer, or withdraw; then click "Submit". At current, all transfers made, if in Checking, will route to the indivual's savings account and vis versa.

        3. Once you have submitted the transaction of your choice, you will see a note of the transaction within the accounts description fields detailing the transaction type, description, amount and balance.


Future Developments

We feel, with more time, we could build on this app to enable transactions between multiple users, the development of multiple accounts for each user and transactions made with cards or between banks.


Installation

To use this app, one would need to install:

*node
*bcryptjs
*express
*express-session
*jquery
*mysql2
*nodemon
*passport
*passport-local
*sequelize


Credits
https://github.com/trevinomoni
https://github.com/Athorpe96
https://github.com/paulmorales7
https://github.com/amy-garza
https://github.com/Allyse500