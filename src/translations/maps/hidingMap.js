import PhysicalIndexToValueMap from './physicalIndexToValueMap';
import { arrayReduce } from '../../helpers/array';

/**
 * Map for storing mappings from an physical index to a boolean value. It stores information whether physical index is
 * included in a dataset, but skipped in the process of rendering.
 */
class HidingMap extends PhysicalIndexToValueMap {
  constructor(initValueOrFn = false) {
    super(initValueOrFn);
  }

  /**
   * Get physical indexes which are hidden.
   *
   * Note: Indexes marked as hidden are included in a {@link DataMap}, but aren't rendered.
   *
   * @returns {Array}
   */
  getHiddenIndexes() {
    return arrayReduce(this.getValues(), (indexesList, isTrimmed, physicalIndex) => {
      if (isTrimmed) {
        indexesList.push(physicalIndex);
      }

      return indexesList;
    }, []);
  }
}

export default HidingMap;