logging: true
log: console.log
static_route: "#{process.cwd()}/public"
serve_static: true
list_dir: true
default_home: ['index.html', 'index.htm', 'default.htm']
cgi_dir: "cgi-bin"
serve_cgi: true
serve_php: true
php_cgi: "php-cgi"
served_by: 'Node Simple Router'
software_name: 'node-simple-router'
admin_user: 'admin'
admin_pwd: 'admin'
use_nsr_session: true
avail_nsr_session_handlers: ['dispatch.memory_store', 'dispatch.text_store']
nsr_session_handler: 'dispatch.memory_store'

router.get('/users/:id', function (request, response) {
    response.end("User: " + getUserById(request.params.id).fullName);
});

router.post('/users', function (request, response) {
    insertUser(request.post.user, function (new_user_id) {
        request.post.user.id = new_user_id;
        response.end(JSON.stringify(request.post.user);
    });
});