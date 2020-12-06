<template>
    <div id="app">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1" class=""></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: First slide"><title>Placeholder</title>
                        <rect
                            width="100%" height="100%" fill="#e6b39"></rect><text x="50%" y="50%" fill="#e6b3ff" dy=".3em">First slide</text></svg>
                    <div class="carousel-caption d-none d-md-block">
                        <img src="../assets/s1.jpg" alt="imagen1" width="900px">
                    </div>
                </div>
                <div class="carousel-item">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Second slide"><title>Placeholder</title>
                        <rect
                            width="100%" height="100%" fill="#e6b3ff"></rect><text x="50%" y="50%" fill="#e6b3ff" dy=".3em">Second slide</text></svg>
                    <div class="carousel-caption d-none d-md-block">
                        <img src="../assets/s2.jpg" alt="imagen2 " width="800px">
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>



<script>

export default {
    name: "TopBanner"
}
</script>