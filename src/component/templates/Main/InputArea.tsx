import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import {
  handleBgVal,
  handleChange,
  handleChange02,
  handleChange05,
  handleColorVal,
  handleEnter03,
  handleEnter04,
  handleEnterCheck,
  hanldeSubmit,
} from "../../../redux/input/inputSlice";
import { Form } from "react-bootstrap";

function InputArea() {
  const dispatch = useDispatch<AppDispatch>();
  const { rangeVals, rangeVals02, rangeVals03, rangeVals04, rangeVals05 } =
    useSelector((state: RootState) => state.input);

  return (
    // 入力欄
    <div className="inputArea">
      {/* 横幅 */}
      <div className="mb-1">
        Width:
        <input
          type="range"
          name="width"
          onChange={(e) => dispatch(handleChange(e.target.value))}
          className="align-middle"
          min="20"
          max="500"
          value={rangeVals}
        />{" "}
        <span className="rangeNo">{rangeVals}</span>px
        <br />
      </div>
      {/* 高さ */}
      <div className="mb-1">
        Height:
        <input
          type="range"
          name="height"
          onChange={(e) => dispatch(handleChange02(e.target.value))}
          className="align-middle"
          min="20"
          max="500"
          value={rangeVals02}
        />{" "}
        <span className="rangeNo">{rangeVals02}</span>px
        <br />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          hanldeSubmit();
        }}
      >
        {/* 背景 */}
        <div className="mb-1">
          背景色（16進）:#
          <span className="col-3 d-inline-block mx-1">
            <Form.Control
              size="sm"
              onChange={(e) => dispatch(handleBgVal(e.target.value))}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (rangeVals03.length > 6) {
                    alert("6文字以内に収めましょう");
                    return;
                  }
                  dispatch(handleEnterCheck(e));
                  setTimeout(() => {
                    dispatch(handleEnter03());
                  }, 500);
                }
              }}
              value={rangeVals03}
            />
          </span>

          <span className="d-none d-sm-inline">(enterで変更されます)</span>
        </div>

        {/* 文字色 */}
        <div className="mb-1">
          文字の色（16進）:#
          <span className="col-3 d-inline-block mx-1">
            <Form.Control
              placeholder=""
              aria-label=""
              aria-describedby=""
              size="sm"
              onChange={(e) => dispatch(handleColorVal(e.target.value))}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (rangeVals04.length > 6) {
                    alert("6文字以内でお願いします");
                    return;
                  }
                  dispatch(handleEnterCheck(e));
                  setTimeout(() => {
                    dispatch(handleEnter04());
                  }, 500);
                }
              }}
              value={rangeVals04}
            />
          </span>
          <span className="d-none d-sm-inline">(enterで変更されます)</span>
        </div>
        <input type="submit" className="hidden" value="" />
      </form>

      {/* テキスト */}
      <div>
        テキスト（30字以内）:
        <Form.Control
          as="textarea"
          className="mt-2"
          style={{ height: '100px' }}
          onInput={(e) => {
            e.preventDefault();
            dispatch(handleChange05(e.target));
          }}
          value={rangeVals05}
        />

      </div>
    </div>
  );
}

export default InputArea;
