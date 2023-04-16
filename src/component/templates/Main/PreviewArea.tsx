import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../store";

function PreviewArea() {
  const {
    rangeVals,
    rangeVals02,
    submitText03,
    submitText04,
    rangeVals05,
    loading,
  } = useSelector((state: RootState) => state.input);

  const Box = styled.div`
    width: ${rangeVals}px;
    height: ${rangeVals02}px;
    background-color: #${submitText03};
    display: flex;
    align-items: center;
    justify-content: center;
    margin:0 auto;
  `;
  const BoxText = styled.p`
    font-size: 16px;
    color: #${submitText04};
  `;

  return (
    <div className="preview_area">
      <div className="spinner_box">
        {loading ? null : <Spinner className="js-spinner" animation="border" />}
      </div>
      <Box>
        <BoxText>{rangeVals05}</BoxText>
      </Box>
    </div>
  );
}

export default PreviewArea;
