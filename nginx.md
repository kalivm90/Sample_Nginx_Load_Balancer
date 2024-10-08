# nginx location /etc/nginx/

This is where all the files you need are located to configure the nginx server, mostly in nginx.conf

# editing nginx files in vscode

If you need to edit and save files on vscode but you are getting permisson errors its because vscode is not meant to edit system files. Either use something like

`sudo code /etc/nginx/nginx.conf`

or change the permissions of the nginx files you need to edit. You may want to change them back after since its not very secure

# You may also need to change the persmissions of your root html file so nginx can read it

`sudo chmod 644 /home/kalivm90/Dev/nginx/sample_nginx_project/index.html`

# after every change to the config file or other nginx files you need to reload nginx

`sudo nginx -s reload`

# IF STLYES ARE NOT WORKING DO THIS

Reload page with CNTRL-F5
