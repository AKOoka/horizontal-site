enum ScrollDirection {
  X,
  Y
}

type WheelEventValidator = (e: WheelEvent) => boolean

export class Scroller {
  private readonly _context: HTMLElement
  private _scrollDirection: ScrollDirection
  private _x: number
  private _scrollProgressX: number
  private _scrollProgressY: number
  private _startX: number
  private _lastX: number
  private _dragging: boolean
  private _wheelEventValidator: WheelEventValidator

  constructor () {
    this._context = this._createContext()
    this._scrollDirection = ScrollDirection.X
    this._x = 0
    this._scrollProgressX = 0
    this._scrollProgressY = 0
    this._startX = 0
    this._lastX = 0
    this._dragging = false
    this._wheelEventValidator = () => true
  }

  get context (): HTMLElement {
    return this._context
  }

  private _validateX (x: number): number {
    if (x < 0) {
      return 0
    } else if (x > this._context.scrollWidth - window.innerWidth) {
      return this._context.scrollWidth - window.innerWidth
    } else {
      return x
    }
  }

  private _scrollX (x: number): void {
    this._scrollProgressX = x / (this._context.scrollWidth - window.innerWidth)
    this._context.style.left = `${-x}px`
  }

  private _createContext (): HTMLElement {
    const context = document.createElement('div')
    context.style.position = 'relative'
    context.style.display = 'inline-block'
    return context
  }

  private _scrollingStart (x: number): void {
    this._startX = x
    this._lastX = this._startX
  }

  private _scrollingMove (x: number): void {
    this._lastX = x
    this._scrollX(this._validateX(this._x + this._startX - x))
  }

  private _scrollingEnd (): void {
    this._x = this._validateX(this._x + this._startX - this._lastX)
  }

  setTouchListeners (): void {
    this._context.ontouchstart = e => {
      this._scrollingStart(e.touches[0].clientX)
    }

    this._context.ontouchmove = e => {
      this._scrollingMove(e.touches[0].clientX)
    }

    this._context.ontouchend = e => {
      this._scrollingEnd()
    }
  }

  setMouseDragListeners (): void {
    this._context.style.userSelect = 'none'

    this._context.onmousedown = e => {
      if (e.buttons === 1) {
        this._scrollingStart(e.clientX)
        this._dragging = true
      }
    }

    this._context.onmousemove = e => {
      if (this._dragging) {
        this._scrollingMove(e.clientX)
      }
    }

    this._context.onmouseup = () => {
      this._scrollingEnd()
      this._dragging = false
    }
  }

  setWheelListener (): void {
    this._context.onwheel = e => {
      if (!this._wheelEventValidator(e)) {
        return
      }

      this._x = this._validateX(this._x + e.deltaY)

      this._scrollX(this._x)
    }
  }

  setWheelEventValidator (validator: WheelEventValidator): void {
    this._wheelEventValidator = validator
  }

  turnOffAllListeners (): void {
    this._context.onwheel = () => {}
    this._context.onmousedown = () => {}
    this._context.onmousemove = () => {}
    this._context.onmouseup = () => {}
    this._context.ontouchstart = () => {}
    this._context.ontouchmove = () => {}
    this._context.ontouchend = () => {}
  }

  turnOnAllListeners (): void {
    this.setWheelListener()
    this.setMouseDragListeners()
    this.setTouchListeners()
  }

  changeScrollDirectionToY (): void {
    window.onscroll = () => {
      this._scrollProgressY = window.scrollY / (this._context.scrollHeight - window.innerHeight)
    }

    window.scroll({
      top: this._scrollProgressX * (document.body.scrollHeight - document.body.offsetHeight)
    })

    this._x = 0
    this._scrollX(this._x)
    this._scrollDirection = ScrollDirection.Y
  }

  changeScrollDirectionToX (): void {
    if (this._scrollDirection === ScrollDirection.X) {
      return
    }

    this._x = this._scrollProgressY * (document.body.scrollWidth - document.body.offsetWidth)
    this._scrollX(this._x)
    this._scrollDirection = ScrollDirection.X
  }
}
