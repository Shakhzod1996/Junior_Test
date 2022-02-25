window.addEventListener('DOMContentLoaded', () => {

    // Swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,

        autoplay: {
            delay: 5000,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    // Getting Info from Json File
    // Getting Comments
    // let comment = document.querySelectorAll('.comments')
    let comment1 = document.querySelector('.com1')
    let comment2 = document.querySelector('.com2')
    let comment3 = document.querySelector('.com3')
    let comment4 = document.querySelector('.com4')
    let comment5 = document.querySelector('.com5')
    let comment6 = document.querySelector('.com6')
    let comment7 = document.querySelector('.com7')
    let comment8 = document.querySelector('.com8')

    let user1 = document.querySelector('.use1')
    let user2 = document.querySelector('.use2')
    let user3 = document.querySelector('.use3')
    let user4 = document.querySelector('.use4')
    let user5 = document.querySelector('.use5')
    let user6 = document.querySelector('.use6')
    let user7 = document.querySelector('.use7')
    let user8 = document.querySelector('.use8')

    let link1 = document.querySelector('.a1');
    let link2 = document.querySelector('.a2');
    let link3 = document.querySelector('.a3');
    let link4 = document.querySelector('.a4');
    let link5 = document.querySelector('.a5');
    let link6 = document.querySelector('.a6');
    let link7 = document.querySelector('.a7');
    let link8 = document.querySelector('.a8');




        let usersData = new Request("./feedback_data.json")
    fetch(usersData)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            // comment.forEach((com, index) => {
            //     com.innerHTML = data[index].text
            // })
            // Adding Comments
            comment1.innerHTML = data[0].text
            comment2.innerHTML = data[1].text
            comment3.innerHTML = data[2].text
            comment4.innerHTML = data[3].text
            comment5.innerHTML = data[4].text
            comment6.innerHTML = data[5].text
            comment7.innerHTML = data[6].text
            comment8.innerHTML = data[7].text

            // Adding Users
            user1.innerHTML = data[0].name
            user2.innerHTML = data[1].name
            user3.innerHTML = data[2].name
            user4.innerHTML = data[3].name
            user5.innerHTML = data[4].name
            user6.innerHTML = data[5].name
            user7.innerHTML = data[6].name
            user8.innerHTML = data[7].name

            // Adding Links
            link1.innerHTML = data[0].instagram_username
            link2.innerHTML = data[1].instagram_username
            link3.innerHTML = data[2].instagram_username
            link4.innerHTML = data[3].instagram_username
            link5.innerHTML = data[4].instagram_username
            link6.innerHTML = data[5].instagram_username
            link7.innerHTML = data[6].instagram_username
            link8.innerHTML = data[7].instagram_username

        })

        let pCom1 = document.querySelector('.p-com1');
        let pCom2 = document.querySelector('.p-com2');
        let pCom3 = document.querySelector('.p-com3');
        let pCom4 = document.querySelector('.p-com4');
        let pCom5 = document.querySelector('.p-com5');
        let pCom6 = document.querySelector('.p-com6');


        // Getting Post from Blog_Post with fetch
        let blogData = new Request("./blog_posts.json")
    fetch(blogData)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (blog) {
            pCom1.innerHTML = blog[0].title
            pCom2.innerHTML = blog[1].title
            pCom3.innerHTML = blog[2].title
            pCom4.innerHTML = blog[3].title
            pCom5.innerHTML = blog[4].title
            pCom6.innerHTML = blog[5].title

        })



        // Open Rest Pictures with button
        let restPic = document.querySelectorAll('.card-hide')
        let readMore = document.querySelector('.read-more')
        let clean = document.querySelector('.clean')

        readMore.addEventListener('click', openRestPictures)

        function openRestPictures() {
            restPic.forEach(rest => {
                rest.classList.add('card-show')
            })
            readMore.classList.add('read-more-hide')
            
            clean.classList.add('clean-show')
        }

        clean.addEventListener('click', hideSome)

        function hideSome() {
            readMore.classList.remove('read-more-hide')
            
            clean.classList.remove('clean-show')

            restPic.forEach(rest => {
                rest.classList.remove('card-show')
            })
        }
})

