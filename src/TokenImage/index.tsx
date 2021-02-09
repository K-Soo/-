import { useEffect, useState } from "react";
import styled from "styled-components";
interface ITokenImageProps {
    className?: string;
    src: string;
    // token: string;
    // target: "report" | "namecard" | "profile" | "detail";
}
// const getImageDataPath = (target: ITokenImageProps extends { target: infer P } ? P : never, token: string) => {
//     switch (target) {
//         case "namecard":
//             return `${CONFIG.IMAGE_BASE_URL}/${target}/${token}/full.jpg`;
//         case "report":
//             return `${CONFIG.IMAGE_BASE_URL}/${target}/${token}/thumb/md.jpg`;
//         case "profile":
//             return `${CONFIG.IMAGE_BASE_URL}/${target}/${token}/full.jpg`;
//         case "detail":
//             return `${CONFIG.IMAGE_BASE_URL}/${target}/${token}/full.jpg`;
//     }
//     throw new Error("invaild target");
// };
// const getImageUploadPath = (target: ITokenImageProps extends { target: infer P } ? P : never, token: string) => {
//     switch (target) {
//         case "namecard":
//             return `${CONFIG.IMAGE_UPLOAD_URL}/upload/${target}/${token}`;
//         case "report":
//             return `${CONFIG.IMAGE_UPLOAD_URL}/upload/${target}/${token}`;
//         case "profile":
//             return `${CONFIG.IMAGE_UPLOAD_URL}/upload/${target}/${token}`;
//         case "detail":
//             return `${CONFIG.IMAGE_UPLOAD_URL}/upload/${target}/${token}`;
//     }
//     throw new Error("invaild target");
// };
const TokenImage: React.FunctionComponent<ITokenImageProps> = (props) => {
    const [backgroundImageSrc, setBackgroundImageSrc] = useState(props.src);
    // const [errorCount, setErrorCount] = useState(0);
    // const [isError, setIsError] = useState(false);
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true);

    //     setTimeout(() => {
    //         setBackgroundImageSrc(props.token ? getImageDataPath(props.target, props.token) : "");
    //         setErrorCount(0);
    //         setLoading(false);
    //     }, 5000);
    // }, [props.token]);

    // useEffect(() => {
    //     if (isError) {
    //         setLoading(true);
    //         setTimeout(() => {
    //             setBackgroundImageSrc(getImageUploadPath(props.target, props.token));
    //             setLoading(false);
    //             setIsError(false);
    //         }, 2000);
    //     }
    // }, [isError]);

    return (
        <div className={props.className}>
            {/* {loading ? (
                <article className="loading">
                    <BaseSpinner color="blue" />
                </article>
            ) : null} */}
            <img
                style={{ display: "none" }}
                src={backgroundImageSrc}
            // onError={() => setIsError(true)}
            />
            <div
                className="custom-image"
                style={{
                    backgroundImage: `url(${backgroundImageSrc})`,
                    backgroundSize: backgroundImageSrc === "" ? "auto 100px" : "cover",
                }}
            >
                {props.children}
            </div>
        </div>
    );
};
export default styled(TokenImage)`
  width: 100%;
  height: 100%;
  .custom-image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
`;