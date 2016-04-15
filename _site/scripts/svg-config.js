var svgIconConfig = {
  hamburger : {
    url : 'objects/hamburger.svg',
    animation : [
      {
        el : 'path:nth-child(1)',
        animProperties : {
          from : { val : '{"path" : "m 5.0916789,20.818994 53.8166421,0"}' },
          to : { val : '{"path" : "m 5.091679,9.771104 53.816642,0"}' }
        }
      },
      {
        el : 'path:nth-child(3)',
        animProperties : {
          from : { val : '{"path" : "m 5.0916788,42.95698 53.8166422,0"}' },
          to : { val : '{"path" : "m 5.0916789,54.00487 53.8166421,0"}' }
        }
      }
    ]
  },
  hamburgerCross : {
    url : 'objects/hamburger.svg',
    animation : [
      {
        el : 'path:nth-child(1)',
        animProperties : {
          from : { val : '{"path" : "m 5.0916789,20.818994 53.8166421,0"}' },
          to : { val : '{"path" : "M 12.972944,50.936147 51.027056,12.882035"}' }
        }
      },
      {
        el : 'path:nth-child(2)',
        animProperties : {
          from : { val : '{"transform" : "s1 1", "opacity" : 1}', before : '{"transform" : "s0 0"}' },
          to : { val : '{"opacity" : 0}' }
        }
      },
      {
        el : 'path:nth-child(3)',
        animProperties : {
          from : { val : '{"path" : "m 5.0916788,42.95698 53.8166422,0"}' },
          to : { val : '{"path" : "M 12.972944,12.882035 51.027056,50.936147"}' }
        }
      }
    ]
  }
};
