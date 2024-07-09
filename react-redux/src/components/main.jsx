import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMyBag, delGood, getArray } from "../store/reducer";
import { Button } from "antd";

function Main() {
  let array = useSelector((state) => state.array);
  let dispatch = useDispatch();
  let [clickedId, setclickedId] = useState(null);
  let [addedGood, setAddedGood] = useState(null);

  useEffect(() => {
    dispatch(getArray());
  }, []);

  useEffect(() => {
    if (clickedId != null) {
      dispatch(delGood(clickedId));
      console.log(clickedId);
    }
  }, [clickedId]);

  useEffect(() => {
    if (addedGood != null) {
      dispatch(addMyBag(addedGood));
    }
  }, [addedGood]);

  return (
    <>
      <p>Goods</p>
      <ul
        style={{
          display: `flex`,
          flexDirection: `column`,
          width: `100%`,
          justifyContent: `center`,
          alignItems: `center`,
          listStyle: `none`,
          gap: `20px`,
        }}
      >
        {array.map((good) => (
          <li
            key={good.id}
            style={{ display: `flex`, flexDirection: `column`, width: `200px` }}
          >
            <Link
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
              to={`/good-info/${good.id}`}
              state={good}
            >
              {good.product_name}
            </Link>
            <div style={{ display: `flex`, gap: `10px`, marginTop: `10px` }}>
              <Button
                onClick={() => {
                  setAddedGood({ ...good, count: (good.count += 1) });
                }}
                style={{ width: `100px` }}
                type="default"
              >
                Add
              </Button>
              <Button
                onClick={() => {
                  setclickedId(good.id);
                }}
                style={{ width: `100px` }}
                type="default"
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Main;
