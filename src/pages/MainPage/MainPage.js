import React from 'react';
import Header from "../../components/Header/Header";
import SectionContact from "../../components/SectionContact/SectionContact";
import Footer from "../../components/Footer/Footer";
import PostList from "../../components/PostList/PostList";


const MainPage = () => {


    return (
        <div>

            <Header/>
            <SectionContact/>
            <PostList/>
            <Footer/>

        </div>
    );
};

export default MainPage;