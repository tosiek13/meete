import * as React from "react";

///<reference path='../../../typings/meete/FontAwesome.d.ts'/>

class FontAwesomeComponent extends React.Component<IFontAwesomeComponentProps, {}> {
      classNames: string[];

      constructor(props: IFontAwesomeComponentProps) {
            super(props);
            this.classNames = [];
            this.classNames.push('fa')
            this.classNames.push('fa-' + this.props.name)
            this.props.size && this.classNames.push('fa-' + this.props.size)
            this.props.spin && this.classNames.push('fa-spin')
            this.props.pulse && this.classNames.push('fa-pulse')
            this.props.border && this.classNames.push('fa-border')
            this.props.fixedWidth && this.classNames.push('fa-fw')
            this.props.inverse && this.classNames.push('fa-inverse')
            this.props.flip && this.classNames.push('fa-flip-' + this.props.flip)
            this.props.rotate && this.classNames.push('fa-rotate-' + this.props.rotate)
            this.props.stack && this.classNames.push('fa-stack-' + this.props.stack)

            this.onClick = this.onClick.bind(this);
      }

      onClick(){
            this.props.fireClick();
      }


      render() {
            return (
                  <span className={this.classNames.join(' ')} onClick={this.onClick} >
                  </span>
            );
      }
}

export { FontAwesomeComponent };