import React from "react";
import { toast } from "react-toastify";

import { SnippetCardContainer, Snippet } from "../settingsStyles.js";

class SnippetCard extends React.Component {

  copyToclipboard = area => {
    this[area].select();

    document.execCommand("copy");

    toast.success("Coppied to clipboard.");
  };

  render() {
    const { currentUser } = this.props;

    return (
      <SnippetCardContainer>
        {/* ------------------------------ User Conditional Rendering ------------------------------ */} 
        {currentUser.acct_type === "affiliate" &&
        typeof currentUser === "object" ? (
          <>
            {/* ------------------------------ Horizontal Banner Snippet ------------------------------ */}                    
            <Snippet>
              <h1>Horizontal Banner Snippet</h1>
              <textarea
                ref={textarea => (this.horizontalArea = textarea)}
                onClick={() => this.copyToclipboard("horizontalArea")}
                spellCheck={false}
                value={`<iframe src="https://ladnetwork.netlify.com/ad/${currentUser.id}/horizontal" frameborder="0" scrolling="no" height="100" width="670"></iframe>`}
                readOnly
              />
            </Snippet>
            {/* ------------------------------ Vertical Banner Snippet ------------------------------ */} 
            <Snippet>
              <h1>Vertical Banner Snippet</h1>
              <textarea
                ref={textarea => (this.verticalArea = textarea)}
                onClick={() => this.copyToclipboard("verticalArea")}
                spellCheck={false}
                value={`<iframe src="https://ladnetwork.netlify.com/ad/${currentUser.id}/vertical" frameborder="0" scrolling="no" height="600" width="120"></iframe>`}
                readOnly
              />
            </Snippet>
            {/* ------------------------------ Square Banner Snippet ------------------------------ */} 
            <Snippet>
              <h1>Square Banner Snippet</h1>
              <textarea
                ref={textarea => (this.squareArea = textarea)}
                onClick={() => this.copyToclipboard("squareArea")}
                spellCheck={false}
                value={`<iframe src="https://ladnetwork.netlify.com/ad/${currentUser.id}/square" frameborder="0" scrolling="no" height="250" width="250"></iframe>`}
                readOnly
              />
            </Snippet>
          </>
        ) : (
          /* ------------------------------ User Conditional Rendering ------------------------------ */
          currentUser.acct_type === "advertiser" &&
          typeof currentUser === "object" && (
            /* ------------------------------ Conversions Snippet ------------------------------ */
            <Snippet height="270px">
              <h1>Conversions Snippet</h1>
              <textarea
                ref={textarea => (this.conversions = textarea)}
                onClick={() => this.copyToclipboard("conversions")}
                spellCheck={false}
                value={`<script> var _0x4cd1=['agreement','location','search','open','POST','https://lad-network.herokuapp.com/api/analytics','setRequestHeader','application/json','send','stringify','conversion','userAgent','referrer','get'];(function(_0x271e30,_0x3cfea0){var _0x2d4916=function(_0xb86a2e){while(--_0xb86a2e){_0x271e30['push'](_0x271e30['shift']());}};_0x2d4916(++_0x3cfea0);}(_0x4cd1,0x16d));var _0x40dc=function(_0xea6447,_0x11b764){_0xea6447=_0xea6447-0x0;var _0x217519=_0x4cd1[_0xea6447];return _0x217519;};var xhr=new XMLHttpRequest();var urlParams=new URLSearchParams(window[_0x40dc('0x0')][_0x40dc('0x1')]);xhr[_0x40dc('0x2')](_0x40dc('0x3'),_0x40dc('0x4'),!![]);xhr[_0x40dc('0x5')]('Content-Type',_0x40dc('0x6'));xhr[_0x40dc('0x7')](JSON[_0x40dc('0x8')]({'action':_0x40dc('0x9'),'userAgent':navigator[_0x40dc('0xa')],'referrer':document[_0x40dc('0xb')],'agreement_id':Number(urlParams[_0x40dc('0xc')](_0x40dc('0xd')))}));</script>`}
                readOnly
              />
            </Snippet>
          )
        )}
      </SnippetCardContainer>
    );
  }
}

/* ------------------------------ Non Formatted Conversion Snippet ------------------------------ */
/*<script> 
    var xhr = new XMLHttpRequest();
    var urlParams = new URLSearchParams(window.location.search);
    xhr.open('POST', 'https://lad-network.herokuapp.com/api/analytics', true);
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(JSON.stringify({
        action: "conversion",
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        agreement_id: Number(urlParams.get("agreement"))
        })
    );
</script> */

export default SnippetCard;
