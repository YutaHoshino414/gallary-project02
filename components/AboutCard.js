/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react';
import styles from '../styles/About.module.css'
import user from '../public/user.jpg';
import { useState } from 'react';
import fire from '../public/fire_ball_icon.svg'


const card = css`
    margin: 50px auto 0;
	width: 1000px;
	height: 500px;
`
const card__inner = css`
	width: 100%;
	height: 100%;
	transition: transform 1s;
	transform-style: preserve-3d;
	cursor: pointer;
	position: relative;
`

const cardFace__front = css`
    background-image: linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%);  
	display: flex;
	align-items: center;
	justify-content: center;
	transform: rotateX(180deg);
    h2{
        color: #fff;
        font-size: 50px;
    }
`
const front_content = css`
    padding: 30px;
`
const cardFace__back = css`
	background-color: #f3f3f3;
`

const AboutCard = () => {
    const [flipped, setFlipped] = useState(true);
    
    function handleFlip(){
        setFlipped(!flipped)
        console.log(flipped)
    }
    return ( 
        <div css={card}>
		<div  css={card__inner} onClick={handleFlip} className={flipped ? "is_flipped":""}>
			<div css={cardFace__front}  className={styles.card__face}>
				<div css={front_content}>
                    <h2>About</h2><br/>
                    <p>
                    ご覧いただきありがとうございます。本サイト開発者のHYと申します。<br/>
                    こちらのサイトでは、私個人のReact学習における日々のアウトプットの場として<br/>
                    様々なライブラリを使用したコンポーネントを掲載しています。
                    </p>
                </div>
                <img src={fire.src} width={120} className={styles.fire} />
			</div>
			<div css={cardFace__back} className={styles.card__face}>
				<div className="card__content">
					<div className="card__header">
						<h2>hello</h2><img src={user.src}  className={styles.user_img} />
					</div>
					<div className="card__body">
						<h3>UNDER DEVELOPMENT ..</h3>
						<h3>Update Here soon ..</h3>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
							Nisi nihil eos ducimus cumque assumenda eligendi placeat, 
							totam dolore similique distinctio nostrum. Fugit hic, corporis repudiandae id saepe non ea. 
							Sapiente.Excepturi autem nihil omnis provident dolor possimus saepe itaque quasi eos aliquam? 
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
}

export default AboutCard;