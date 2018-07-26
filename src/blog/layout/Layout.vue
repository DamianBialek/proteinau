<template>
    <div>
        <Navbar class="sticky-top"></Navbar>
        <Header></Header>
        <main class="container">
            <section class="row">
                <router-view class="col-lg-9 main-content"></router-view>
                <Sidebar class="col-lg-3 sidebar"></Sidebar>
            </section>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
    import Navbar from './components/Navbar'
    import Sidebar from './components/Sidebar'
    import Header from './components/Header'
    import Footer from './components/Footer'
    export default {
        name: "Layout",
        components: {Navbar, Header, Sidebar, Footer}
    }
</script>

<style lang="scss">
html{
    height: 100%;
}

body{
    min-height: 100%;
    position: relative;
    padding-bottom: 80px;
}
main{
    padding-bottom: 50px;

    .main-content, .sidebar{
        padding-top: 50px;
    }
}
</style>