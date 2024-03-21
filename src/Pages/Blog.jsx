import { Link } from "react-router-dom";

export default function Blog() {


    return (
        <div className="blog-page">

            <div className="slide-in-left">
                <img src="./img/blog-page/nature10.jpg" alt="" />

                <div>
                    <h6>MARCH 8, 2016</h6>
                    <h1>Best Food in Greenwich Village</h1>
                    <Link href="">Read Post</Link>
                </div>
            </div>

            <div className="slide-in-top">
                <img src="./img/blog-page/nature09.jpg" alt="" />

                <div>
                    <h6>MARCH 8, 2016</h6>
                    <h1>Just One Piece of the Wrecked Ship</h1>
                    <Link href="">Read Post</Link>
                </div>
            </div>

            <div className="slide-in-bottom">
                <img src="./img/blog-page/nature07.jpg" alt="" />

                <div>
                    <h6>MARCH 8, 2016</h6>
                    <h1>Tasty Apples</h1>
                    <Link href="">Read Post</Link>
                </div>
            </div>

            <div className="slide-in-right">
                <img src="./img/blog-page/blog01.jpg" alt="" />

                <div>
                    <h6>MARCH 8, 2016</h6>
                    <h1>Beautiful, Red & Somewhat Scary</h1>
                    <Link href="">Read Post</Link>
                </div>
            </div>

        </div>
    )
}