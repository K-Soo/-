import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

import CrownIcon from '../Icon/CrownIcon';

type TAlign = 'vertical_A' | 'vertical_B' | 'horizontal' | 'vertical_non_crown_A';

interface ISaleCardProps {
  className?: string;
  align?: TAlign;
}

const desc = [
  { value: '월세 0억 / 00', label: 'price', className: 'description--price' },
  { value: '아파트 | 트윈타워', label: 'type', className: 'description--type' },
  { value: '관리비 : 00만 | 000m(00P)', label: 'cost', className: 'description--cost' },
  { value: '서울시 성북구 길음동', label: 'address', className: 'description--address' },
  {
    value: '중개사 | 나집사공인중개사사무소',
    label: 'provider',
    className: 'description--provider',
  },
];

const SaleCard: FunctionComponent<ISaleCardProps> = ({ align, className }) => {
  console.log('align: ', align);
  return (
    <section className={className}>
      <figure className='container'>
        <div className='image__box'>
          <span className='image__box--auth'>매물 인증</span>
          <img
            className='image__box--image'
            src='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
            alt='room_image'
          />
        </div>

        <figcaption className='description'>
          {align === 'vertical_A' ||
            ('vertical_B' && (
              <ul>
                <CrownIcon
                  className='description--icon'
                  data-show={align !== 'vertical_B' || 'vertical_A'}
                />
                {desc.map(({ className, value, label }) => (
                  <li key={label} className={className}>
                    {value}
                  </li>
                ))}
              </ul>
            ))}
        </figcaption>
      </figure>
    </section>
  );
};
const CommonFlex = css`
  flex-direction: column;
  padding: 0 15px;
  .image__box {
    position: relative;
    &--image {
      width: 330px;
      border-radius: 5px;
      height: 172px;
      margin: 0 auto 19px 0;
    }
    &--auth {
      position: absolute;
      top: 9px;
      left: 6px;
      color: #fff;
      font-size: 11px;
      width: 44px;
      border-radius: 11px;
      background-color: #212529;
      opacity: 0.6;
      text-align: center;
      line-height: 21px;
      width: 60px;
      height: 21px;
    }
  }
  .description {
    color: #212529;
    font-size: 15px;
    ul {
      position: relative;
    }
    &--icon {
      margin-right: 10px;
      display: inline-block;
    }
    &--price {
      display: inline-block;
      width: 70%;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 12px;
    }
    &--type {
      display: inline-block;
    }
    &--cost {
      color: #999;
      display: inline-block;
      position: absolute;
      right: 0;
    }
    &--address {
      margin-top: 7px;
    }
  }
`;

export default styled(SaleCard)`
  .container {
    display: flex;
    width: 368px;
    margin: 0 auto;
    // vertical
    ${({ align }) =>
      align === 'vertical_A' &&
      css`
        ${CommonFlex}
        .description {
          &--provider {
            display: none;
          }
        }
      `}
    ${({ align }) =>
      align === 'vertical_B' &&
      css`
        ${CommonFlex}
        .description {
          li {
            :last-child {
              margin-top: 7px;
            }
          }
        }
      `}
  }
`;

// export default styled(SaleCard)`
//   & {
//     .image-box {
//       border: 1px solid red;
//       width: ${({ align }) => align === 'horizontal' ? '167px' : '405px'};
//       height: ${({ align }) => align === 'horizontal' ? '123px' : '228px'};
//       display: ${({ align }) => align === 'horizontal' ? 'inline-block' : 'block'};
//       /* width: 405px;
//       height: 228px; */
//       &__image {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//       }
//     }

//     .description {
//       border: 1px solid red;
//       display: ${({ align }) => align === 'horizontal' ? 'inline-block' : 'block'};
//       width: ${({ align }) => align === 'horizontal' ? '250px' : '100%'};
//       height: ${({ align }) => align === 'horizontal' ? '123px' : '100%'};
//       margin-left: ${({ align }) => align === 'horizontal' ? '21px' : '0px'};
//       overflow: hidden;
//       color: #212529;
//       margin-top: 18px;
//       box-sizing: border-box;
//       &--icon {
//         display: ${({ align }) => align === 'horizontal' ? 'none' : 'inline'};
//       }

//       &--price {
//         font-size: 22px;
//         line-height: 27px;
//         font-weight: 600;
//         margin-bottom: 10px;
//       }

//       &--info {
//         display: inline-block;
//         font-size: 15px;
//         line-height: 19px;
//         margin-bottom: 7px;
//         &--grey{
//           color: #868e96;
//           margin-bottom: 7px;
//         }
//       }

//       span:nth-of-type(1){
//         margin-right: 30px;
//       }

//       &--info:nth-last-of-type(1){
//         margin-bottom: 0;
//       }
//     }
//   }
// `;

// const SaleCard: FunctionComponent<ISaleCardProps> = ({ className, align }) => {
//   return (
//     <a className={className}>
//       <figure className='image-box'>
//         <img className="image-box__image" src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="room_image" />
//       </figure>

//       <figcaption className="description">
//         <div className="description--price">
//           <CrownIcon
//             className="description--icon"
//             data-show={align !== "horizontal"}
//           />
//           <span>월세 0억 / 00</span>
//         </div>
//         <span className="description--info">
//           아파트 ㅣ 트윈타워
//         </span>
//         <span className="description--info">
//           서울시 성북구 길음동
//         </span>
//         <p className="description--info--grey">
//           관리비 : 00만  |  000m(00P)
//         </p>
//         <p className="description--info">
//           중개사 ㅣ 나집사공인중개사사무소
//         </p>
//       </figcaption>
//     </a>

//   );
// };
