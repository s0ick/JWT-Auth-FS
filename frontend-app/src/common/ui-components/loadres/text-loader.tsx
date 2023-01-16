import React, {FC} from 'react';

import {TextLoaderBlock, TextLoaderRow, TextLoaderHeader} from '../../styled/ui-components';
import {ITextLoader} from '../../../types/ui-models';
import {range} from '../../../utils/utils';

export const TextLoader: FC<ITextLoader> = ({rows = 1, repeat = 1, hideHeader = false}) => {
  return (
    <>
      {
        range(repeat).map(item => (
          <TextLoaderBlock key={`textLoaderBlock_${item}`}>
            {
              !hideHeader && (
                <TextLoaderHeader/>
              )
            }
            {
              range(rows).map(rowItem => (
                <TextLoaderRow key={`textLoaderBlock_${item}_${rowItem}`}/>
              ))
            }
          </TextLoaderBlock>
        ))
      }
    </>
  );
}
