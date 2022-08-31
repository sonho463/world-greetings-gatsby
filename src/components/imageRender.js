import React from "react";

export const ImageRender = (props) => {
  // imgタグを親要素に対して幅いっぱいに表示する

  const { url, alt } = props; // 画像のURL

  // url以外のパラメータを１つの文字列型変数にセット
  let array = Object.values(props);
  let param = "";
  array.map(function (elem) {
    // propsの最初はurlなのでそれは入れない
    if (array.indexOf(elem) !== 0 || array.indexOf(elem) !== 1) {
      //最初の要素は?をつける
      if (array.indexOf(elem) === 2) {
        param = `?${elem}`;
      } else {
        param = `${param}&${elem}`;
      }
    }
		console.log(param)
		return param;
  });

  return (
    <>
      <img src={url + param} alt={alt} />
    </>
  );
};
