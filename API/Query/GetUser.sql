SELECT User.UserName As "userName",
    User.Password As "password",
    User.Role As "role"
FROM User
WHERE
    User.UserName = @UserName