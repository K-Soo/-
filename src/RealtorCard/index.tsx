import React from 'react';
import styled from 'styled-components';
import TokenImage from '../TokenImage';

type TAlign = 'vertical' | 'horizontal'

interface IRealtorProps {
  className?: string;
  realtor: any;
  align?: TAlign
}

 const Realtor: React.FunctionComponent<IRealtorProps> = (props) => {
  const realtor = {
    "office": "월드부동산공인중개사무소",
    "address": "서울시 광진구 능동로13길 60 1층(화양동)",
    "realtor": "김한경",
    "tel": "010-1234- 5678",
    "office_tel": "02-1235-5678"
  };

  return (
    <div className={`${props.className}`}>
      <TokenImage
        className="realtorcard__profile"
        src={"https://nazipsa-data.s3.ap-northeast-2.amazonaws.com/profile/259ea6681760965d9f7a69b00c0a1419de7431d7/thumb/lg.jpg"}
        key={0}
      />
      <div className="realtorcard__content">
        <p className="realtorcard__content--title">
          {realtor.office}
        </p>
        <p className="realtorcard__content--address">
          {realtor.address}
        </p>
        <p className="realtorcard__content--realtor">
          대표 <a>{realtor.realtor}</a>
        </p>
        <p className="realtorcard__content--tel">
          {`${realtor.office_tel} | ${realtor.tel}`}
        </p>
      </div>
      <div className="realtorcard__buttons">
        <button className="realtorcard__button">
          매매<a>10</a>
        </button>
        <button className="realtorcard__button">
          전세<a>0</a>
        </button>
        <button className="realtorcard__button">
          월세<a>6</a>
        </button>
      </div>
    </div>
  );
};


export default styled(Realtor)`
  border-radius: 5px;
  border: solid 1px #dee2e6;
  background-color: #ffffff;

  /* horizontal set */
  width: ${({ align }) => align === 'horizontal' ? "462px" : "386px"};
  height: ${({ align }) => align === 'horizontal' ? "250px" : "375px"};
  border: ${({ align }) => align === 'horizontal' ? "none" : "solid 1px #dee2e6;"};
  padding: ${({ align }) => align === 'horizontal' ? "30px 28px" : "0"};

  .realtorcard__profile {
    margin: ${({ align }) => align === 'horizontal' ? "none" : "39px auto 0 auto;"};
    display: ${({ align }) => align === 'horizontal' ? "inline-block" : "block"};
    width: 125px;
    height: 125px;

    .custom-image{
      border-radius: 50%;
    }
  }

  .realtorcard__content {
    display: ${({ align }) => align === 'horizontal' ? "inline-block" : "flex"};
    margin-left: ${({ align }) => align === 'horizontal' ? "34px" : "0"};
    margin-top: ${({ align }) => align === 'horizontal' ? "0" : "10px"};
    
    flex-direction: column;
    align-items: center;

    font-family: AppleSDGothicNeo;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    
    .realtorcard__content--title {
      font-size: 22px;
      font-weight: 600;
      line-height: 1.23;
      color: #212529;
      cursor: pointer;
      margin-bottom: ${({ align }) => align === 'horizontal' ? "11px" : "5px"};
    }

    .realtorcard__content--address {
      font-family: AppleSDGothicNeo;
      font-size: 14px;
      line-height: 1.21;
      color: #212529;

      margin-bottom: ${({ align }) => align === 'horizontal' ? "8px" : "15px"};
    }

    .realtorcard__content--realtor {

      font-size: 16px;
      font-weight: 500;
      line-height: 1.19;
      text-align: left;
      color: #868e96;

      margin-bottom: 8px;

      a {
        color: #212529;
        cursor: pointer;
      }
    }

    .realtorcard__content--tel {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.19;
      color: #212529;
    }
  }

  .realtorcard__buttons {
    display: flex;
    margin: 0 20px;
    margin-top: 29px;

    .realtorcard__button {
      width: 110px;
      height: 36px;
      margin-right: 8px;
      &:last-child {
        margin-right: 0;
      }
      color: #868e96;

      a {
        margin-left: 5px;
        color: #2162dd;
        cursor: pointer;
      }
    }
  }
`;