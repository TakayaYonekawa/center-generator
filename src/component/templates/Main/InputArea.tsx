import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { handleBgVal, handleChange, handleChange02, handleChange05, handleColorVal, handleEnter03, handleEnter04, handleEnterCheck, hanldeSubmit } from "../../../redux/input/inputSlice";

function InputArea() {
  const dispatch = useDispatch<AppDispatch>();
  const {rangeVals, rangeVals02, rangeVals03, rangeVals04 , rangeVals05} = useSelector((state:RootState) => state.input)

  return (
    <div className="inputArea">
      <div>
        Width:
        <input
          type="range"
          name="width"
          onChange={(e) => dispatch(handleChange(e.target.value))}
          className="rangeWidth"
          min="0"
          max="500"
          value={rangeVals}
        />{" "}
        <span className="rangeNo">{rangeVals}</span>px
        <br />
      </div>
      <div>
        Height:
        <input
          type="range"
          name="height"
          onChange={(e) => dispatch(handleChange02(e.target.value)) }
          className="rangeHeight"
          min="0"
          max="500"
          value={rangeVals02}
        />{" "}
        <span className="rangeNo">{rangeVals02}</span>px
        <br />
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        hanldeSubmit();
      }}>
        <div>
          背景色（16進）:#
          <input
            type="text"
            className="rangeBgColor"
            onChange={(e) => dispatch(handleBgVal(e.target.value))}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (rangeVals03.length > 6) {
                  alert("6文字以内に収めましょう");
                  return;
              }
              dispatch(handleEnterCheck(e))
              setTimeout(() => {
                dispatch(handleEnter03())
              },500)
            }
            }}
            value={rangeVals03}
          />{" "}
          (enterで変更されます)
        </div>
        <div>
          文字の色（16進）:#
          <input
            type="text"
            className="rangeTextColor"
            onChange={(e) => dispatch(handleColorVal(e.target.value))}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (rangeVals04.length > 6) {
                  alert("6文字以内に収めましょう");
                  return;
              }
              dispatch(handleEnterCheck(e))
              setTimeout(() => {
                dispatch(handleEnter04())
              },500)
            }
            }}
            value={rangeVals04}
          />{" "}
          (enterで変更されます)
        </div>
        <input type="submit" className="hidden" value="" />
      </form>
      <div>
        テキスト（30字以内）:
        <br />
        <br />
        <textarea
          className="rangeText"
          onInput={(e) =>{
            e.preventDefault();
             dispatch(handleChange05(e.target))
            }}
          value={rangeVals05}
        ></textarea>
      </div>
    </div>
  );
}

export default InputArea;
