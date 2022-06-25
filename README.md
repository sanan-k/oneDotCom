# oneDotECom

Hands On Interview - Fullstack - One Dot E-Com

## Screen Captures
> Landing Page
> <img src="Captures/onedotecom_signin.png" alt="Landing Page"/>
> <img src="Captures/onedotecom_signup.png" alt="Landing Page"/>

> Home Page
> <img src="Captures/onedotecom_home.png" alt="Home Page"/>

## API
- Base URL: http://localhost/api

   **USER**
   > [POST] /user/register

   **AUTH**
   > [POST] /auth/login
   > [POST] /auth/logout

   **PRODUCTS**
   > [GET] /products
   >       - Accessible to all
   >       
   > [POST] /products
   >       - Accessible to ADMIN | SELLER
   >       
   > [PUT] /products
   >       - Accessible to ADMIN | SELLER
   >       
   > [DELETE] /products/:productId
   >       - Accessible to ADMIN | SUPPORTER
