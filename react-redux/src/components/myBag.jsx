import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { delMyBag, getMyBag } from "../store/reducer";
import { Button } from "antd";

function MyBag() {
    
  //Use State-ler
  let [deletedId, setDeletedId] = useState(null);
  
  //Selector Dispatch
  let myBag = useSelector((state) => state.myBag);
  let dispatch = useDispatch();
  
  
  
  //Use effect-ler
  useEffect(() => {
    dispatch(getMyBag());
  }, []);
  useEffect(() => {
    if (deletedId != null) dispatch(delMyBag(deletedId));
  }, [deletedId]);


  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        width: `100%`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      {myBag.map((good) => (
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
            <p> Name:{good.product_name}</p>
            <p> Count:{good.count}</p>
          </Link>
          <div style={{ display: `flex`, gap: `10px`, marginTop: `10px` }}>
            <Button
              onClick={() => {
                setDeletedId(good.id);
              }}
              style={{ width: `100px` }}
              type="default"
            >
              Delete
            </Button>
          </div>
        </li>
      ))}
    </div>
  );
}

export default MyBag;
