<template>

    <div id="app">
        <div class="header">
                    <div class="container-menu">
                        <div class="container-logo">
                            <h1 class="site-title">BookStore</h1>
                        </div>
                        <nav class="nav-list">
                            <ul class="main-menu">
                                <li class="main-menu__item">
                                    <a href="index.html" class="main-menu__link" >Inicio</a>
                                </li>
                                <li class="main-menu__item">
                                    <a href="index.html#news" class="main-menu__link">Noticias</a>
                                </li>
                                <li class="main-menu__item">
                                    <a href="index.html#team" class="main-menu__link">Equipo</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    </div>
    </div>

</template>

<script>
export default {
    name: "TopMenu"
}
</script>

<style scoped>
.header{
    background-color: #85C1E9 ;
    height: auto;
}

.container-menu{
    height: 60px;
    background-color: #D7BDE2;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
}

.container-logo{
    width: 100%;
    height: inherit;
    background-color: #EBDEF0 ;
    text-align: center;
}

.site-title{
    margin: 0;
    padding: 0.36em 0;
    text-align: center;
}



.nav-list{
    padding: 0.25em 0;
    list-style-type: none;
    text-align: center;
    width: 100%
}

.nav-element{
    padding: 1em 15px;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    color: #3e3e3e;

}

.nav-element:hover{
    text-decoration: underline;
    font-weight: bold;
}

.main-menu{
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
}

main-menu__item{
    line-height: 3;
    text-align: end;

}

.main-menu__link{
    text-decoration: none;
    font-size: 1em;
    color: #3e3e3e;
    text-align: end;
}

.main-menu__link:hover{
    text-decoration: underline;
    font-weight: bold;
    
}
</style>




