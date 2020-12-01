<template>
  <aside>
    <!-- bite -->
    <div class="pub bite" @click="$emit('preview-click')">
      <div>
        <img :src="previewBite" alt="enlarge your *****"/>
        <span>Are your qualified for <span class="highlight">high-quality</span>
        <span class="censored">p---s</span> enlargement? <br/>Don't wait anymore!</span>
        <strong>click here to discover it!</strong>
        <em class="poweredBy">powered by <span>Kev Adams</span></em>
      </div>
    </div>

    <!-- anus -->
    <div class="pub anus" @click="$emit('preview-click')">
      <div>
        <img :src="previewAnus" alt="open your ****"/>
        <span>Envie de s'ouvrir un peu l'<span class="censored">a-&nbsp;&nbsp;-s</span>&nbsp;?</span>
        <strong>pénétrez la commu !</strong>
        <em class="poweredBy"><span>Enkulasecte</span></em>
      </div>
    </div>

    <!-- vulve -->
    <div class="pub vulve" @click="$emit('preview-click')">
      <div>
        <figure class="img">
          <span class="clito"></span>
          <span class="vulva">
            <span class="before"></span>
            <span class="after"></span>
          </span>
        </figure>
        <span>Et si l'écartement de chatounette était fait pour vous ?</span>
        <strong>rejoignez la commu !</strong>
        <em class="poweredBy">
          <img :src="ariel" alt="logo Ariel"/>
          <span>Ariel</span>
          seal of approval</em>
      </div>
    </div>

  </aside>
</template>

<script>
import previewBite from './bite.gif'
import previewAnus from './anus.png'
import ariel from './ariel.png'

export default {
  name: "Quiz1Preview",
  data() {
    return {
      previewBite,
      previewAnus,
      ariel
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes blink {
  to {
    visibility: hidden;
  }
}

@keyframes zoom {
  from {
    transform: scale(1);
  }
  50% {
    transform: scale(3);
  }
  to {
    transform: scale(1);
  }
}


.pub {
  margin: 30px 15px;
  display: inline-block;
  cursor: pointer;

  user-select: none;

  & > div {
    overflow: hidden;
    position: relative;
    width: 292px;
    height: 338px;
    background: rgba(255, 80, 200, 0.7);
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
    border: 5px solid red;

    img {
      box-shadow: none;
      height: 100%;
    }

    & > span, & > strong {
      position: absolute;
    }

    & > span {
      top: 15px;
      left: 0;
      text-align: center;
      //opacity: 0.7;
      font-size: 1.125rem;
      padding: 0 10px;
      text-shadow: 0 0 1px white, 0 0 1px white;

      & .censored {
        position: relative;

        &:before {
          background: url('./youtube.png');
          width: 133px;
          height: 92px;
          content: '';
          position: absolute;
          transform: translateX(6px) translateY(3px) scale(.2) rotate(-10deg);
          transform-origin: top left;
        }
      }

      & .highlight {
        display: block;
        color: yellow;
        text-shadow: none;
        font-weight: bold;

        &:before, &:after {
          animation: blink 1s steps(5, start) infinite;
          content: '*';
        }
      }
    }

  }

  .poweredBy {
    position: absolute;
    background: red;
    color: white;
    white-space: nowrap;
    font-size: .7rem;
    right: 0;
    top: 0;
    transform-origin: center;
    width: 150px;
    transform: translateX(30px) translateY(7px) rotate(25deg);

    & span {
      display: block;
      font-weight: bold;
    }
  }
}

strong {
  bottom: 15px;
  left: 0;
  width: 100%;
  color: white;
  text-transform: uppercase;
  font-size: 2rem;
  padding: 0 10px;
  text-shadow: 0 0 3px #aa0000, 0 0 3px #aa0000, 0 0 3px #aa0000, 0 0 3px #aa0000;
  animation: blink 1s steps(5, start) infinite;
}

.pub.anus {
  strong {
    animation: none;
    text-shadow: none;
    bottom: 0;
    padding: 10px 10px 0;
    background: rgba(0, 0, 0, 0.3);
    font-size: 1.9rem;
    line-height: 3.3rem;
    text-align: right;
  }

  & > div {
    background: rgba(255, 255, 255, 0.7);
    border-color: black;

    & > span {
      text-shadow: none;
      display: block;
      background: white;
      top: 0;
      border-bottom: 1px solid black;
      font-weight: bold;
      color: black;
      padding: 5px;

      .censored:before {
        transform: translateX(7px) translateY(1px) rotate(7deg) scale(.22);
      }
    }

  }

  img {
    transform-origin: 80% 60%;
    animation: zoom 3s ease-in-out infinite;
  }

  .poweredBy {
    width: 200px;
    padding: 0 0 15px;
    left: 0;
    top: auto;
    bottom: 0;
    transform: translateX(-72px) translateY(15px) rotate(45deg);
    background: black;

    span {
      background: url('./enku.png') no-repeat center;
      background-size: contain;
      color: transparent;
      height: 70px;
    }
  }
}

@mixin op($scale, $name) {
  @keyframes openPussy-#{$name} {
    from {
      transform: scaleX(1);
    }
    50% {
      transform: scaleX($scale);
    }
    to {
      transform: scaleX(1);
    }
  }
}

@keyframes big-clito {
  from {
    transform: translateX(-25%) scale(1);
  }
  50% {
    transform: translateX(0) scale(2);
  }
  to {
    transform: translateX(-25%) scale(1);
  }
}

@include op(1.5, small);
@include op(2, regular);

.pub.vulve {


  strong {
    display: none;
    animation: none;
  }

  & > div {
    border-color: #999;
    background: black;

    .img {
      filter: blur(1px);
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      color: rgb(180, 100, 100);

      .clito {
        background-color: rgb(180, 100, 100);
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 100%;
        position: absolute;
        top: 34%;
        left: 50%;
        animation: big-clito 3s infinite;
      }

      .vulva {
        animation: openPussy-regular 3s infinite;
        letter-spacing: -.75rem;
        transform-origin: center;

        &:before, &:after {
          font-size: 10rem;
        }

        .before, &:after {
          text-indent: -1rem;
        }

        .before, .after {
          font-size: 5rem;
          position: relative;
          top: 8px;
        }

        &:before, .before:before {
          content: '(';
        }

        &:after, .after:after {
          content: ')';
        }
      }
    }

    .poweredBy {
      transform: none;
      top: auto;
      bottom: 0;
      width: 100%;
      height: auto;
      left: 0;
      background: rgba(255, 255, 255, .3);
      padding: 5px 0;
      font-size: 1rem;

      img {
        display: inline-block;
        vertical-align: middle;
        border-radius: 100%;
        border: 2px solid #cc8800;
        margin-right: 15px;
        height: 64px;
      }

      span {
        display: inline;
      }
    }

    & > span {
      color: rgba(255, 80, 200);
      text-shadow: none;
      font-weight: bold;
    }
  }
}

</style>