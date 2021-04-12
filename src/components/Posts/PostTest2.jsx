import React from 'react';
import Image from '../../images/image.jpg';

const PostTest = () => {
    return (
        <article className="post">
            <div className="post__content">
                <div className="post__text">
                    <h2>title h2</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sequi tempora totam dolor distinctio nihil sed itaque
                        illum amet commodi quasi cumque facilis nesciunt iusto, excepturi
                        mollitia molestias voluptatibus recusandae ea.
                    </p>

                    <h3>title h3</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sequi tempora totam dolor distinctio nihil sed itaque
                        illum amet commodi quasi cumque facilis nesciunt iusto, excepturi
                        mollitia molestias voluptatibus recusandae ea.
                    </p>

                    <h4>title h3</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sequi tempora totam dolor distinctio nihil sed itaque
                        illum amet commodi quasi cumque facilis nesciunt iusto, excepturi
                        mollitia molestias voluptatibus recusandae ea.
                    </p>

                    <img src={Image} alt="код"/>

                    <ul>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ul>

                    <ol>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ol>
                </div>
            </div>
        </article>
    )
}

export default PostTest;