export const background = {
  background: {
    color: {
      value: "#000000",
    },
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
  fullScreen: {
    fullScreen: true,
    width: "100%",
    zIndex: -1,
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "slow",
        parallax: {
          force: 10,
        },
      },
      
    },
    
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: {
        value: "#",
      },
      
      distance: 100,
      enable: true,
      opacity: 0.4,
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      enable: true,
      outModes: {
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
    },
    number: {
      density: {
        enable: true,
      },
      value: 5,
    },
    opacity: {
      value: {
        min: 0.1,
        max: 1,
      },
      animation: {
        enable: true,
        speed: .8,
        minimumValue: .1,
      },
    },
    shape: {
      options: {
        character: {
          value: ["K","s","h","a","t","r","a"],
          font: "Verdana",
          style: "",
          weight: "100",
          fill: true,
        },
        
      },
      type: "char",
    },
    size: {
      value: 15,
      animation: {
        speed: 1,
        minimumValue: 1,
      },
    },
    stroke: {
      width: 0,
      color: {
        value: "#ffffff",
        animation: {
          h: {
            count: 0,
            enable: false,
            offset: 0,
            speed: .5,
            sync: true,
          },
          s: {
            count: 0,
            enable: false,
            offset: 0,
            speed: .5,
            sync: true,
          },
          l: {
            count: 0,
            enable: false,
            offset: 0,
            speed: .5,
            sync: true,
          },
        },
      },
    },
  },
};
