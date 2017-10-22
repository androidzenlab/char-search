
Charity search

Charity search is a tool to search the charity organisations in New Zealand, then can find out which charity has an exising company attach to it, as many organisations's company are empty or not existing anymore. 
It's using Reactjs, Redux, Redux-thunk, axios.
To run application:
npm install
npm run start


The charity information is get from http://www.odata.charities.govt.nz/Organisations. As I don't have an token to access company offices API, I use an http request with company number to check if a company is still existing, the url is:
https://app.companiesoffice.govt.nz/companies/app/ui/pages/companies/


Test:

Use mocha, chai, to run the test:
npm run test

Issues and to do:

Only get the first 1000 charities, could add pagination in the future to get more.
Only check the first 100 charity's company info, as I don't want to send to many http request to NZ company office from one computer.
As there is a cors issue, the browser need to enable cross-origin resource sharing, there is a chrome addon for it:
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en


Deploy to debian

1. Run "npm run build", to get the build folder, create an build.zip file from it.
2. Upload build.zip to the Debian server
scp \dev\devwork\reactjs\mywork\char-search\build.zip username@host:/home/ryan/char-search
3. Install npm, npm-serve
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g serve 
4. Unzip build.zip to build directory
5. Run "serve -s build", server will be running at http://host:5000