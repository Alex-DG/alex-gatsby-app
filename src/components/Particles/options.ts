import Colors from '../../config/styles/colors'

export const defaultOptions = {
  autoPlay: true,
  background: {
    color: {
      value: Colors.WHITE,
    },
    image: '',
    position: '',
    repeat: '',
    size: '',
    opacity: 1,
  },
  backgroundMask: {
    composite: 'destination-out',
    cover: {
      color: {
        value: '#fff',
      },
      opacity: 1,
    },
    enable: false,
  },
  backgroundMode: {
    enable: false,
    zIndex: -1,
  },
  detectRetina: true,
  fpsLimit: 60,
  infection: {
    cure: false,
    delay: 0,
    enable: false,
    infections: 0,
    stages: [],
  },
  interactivity: {
    detectsOn: 'window',
    events: {
      onClick: {
        enable: false,
        mode: [],
      },
      onDiv: {
        selectors: [],
        enable: false,
        mode: [],
        type: 'circle',
      },
      onHover: {
        enable: false,
        mode: 'trail',
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        speed: 1,
      },
      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 100,
        links: {
          blink: false,
          consent: false,
          opacity: 1,
        },
      },
      light: {
        area: {
          gradient: {
            start: {
              value: '#ffffff',
            },
            stop: {
              value: '#000000',
            },
          },
          radius: 1000,
        },
        shadow: {
          color: {
            value: '#000000',
          },
          length: 2000,
        },
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        speed: 1,
      },
      slow: {
        factor: 3,
        radius: 200,
      },
    },
  },
  manualParticles: [],
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true,
    },
  },
  particles: {
    bounce: {
      horizontal: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
      vertical: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
    },
    collisions: {
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
      },
      enable: true,
      mode: 'bounce',
    },
    color: {
      value: Colors.SECONDARY,
      opacity: 0.5,
      animation: {
        enable: true,
        speed: 50,
        sync: false,
      },
    },
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        sync: false,
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001,
        },
        value: 0,
        sync: false,
      },
    },
    links: {
      blink: false,
      color: {
        value: Colors.SECONDARY,
      },
      consent: false,
      distance: 130,
      enable: true,
      frequency: 1,
      opacity: 0.4,
      triangles: {
        enable: false,
        frequency: 1,
      },
      width: 1,
      warp: false,
    },
    move: {
      angle: {
        offset: 45,
        value: 90,
      },
      attract: {
        enable: false,
        rotate: {
          x: 3000,
          y: 3000,
        },
      },
      direction: 'none',
      distance: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        maxSpeed: 50,
      },
      noise: {
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
        },
        enable: false,
      },
      outModes: {
        default: 'out',
      },
      random: false,
      size: false,
      speed: 3,
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: '#000000',
        },
      },
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
      limit: 0,
      value: 100,
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.3,
      },
      value: 0.8,
      animation: {
        enable: true,
        minimumValue: 0.3,
        speed: 0.5,
        sync: false,
      },
    },
    reduceDuplicates: false,
    rotate: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: 'clockwise',
      path: false,
    },
    shadow: {
      blur: 0,
      color: {
        value: '#000000',
      },
      enable: false,
      offset: {
        x: 0,
        y: 0,
      },
    },
    shape: {
      options: {},
      type: 'circle',
    },
    size: {
      random: {
        enable: true,
        minimumValue: 1,
      },
      value: 3,
      animation: {
        destroy: 'none',
        enable: true,
        minimumValue: 1,
        speed: 3,
        startValue: 'max',
        sync: false,
      },
    },
    stroke: {
      width: 0,
      color: {
        value: '',
        animation: {
          enable: false,
          speed: 0,
          sync: false,
        },
      },
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: false,
  themes: [],
}
