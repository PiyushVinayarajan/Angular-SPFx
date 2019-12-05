import "reflect-metadata";
require('zone.js');

import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './TileAspfxWebPart.module.scss';
import * as strings from 'TileAspfxWebPartStrings';

import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


export interface ITileAspfxWebPartProps {
  description: string;
}

export default class TileAspfxWebPart extends BaseClientSideWebPart<ITileAspfxWebPartProps> {

  public render(): void {
    window["MyAngularWebPartContext"] = this.context;
    window["MyAngularWebPartProperties"] = this.properties;

    this.domElement.innerHTML = '<spfx-app>Loading...</spfx-app>';

    platformBrowserDynamic().bootstrapModule(AppModule);

  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
