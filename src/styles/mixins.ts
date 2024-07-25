import {PixelRatio, Dimensions} from 'react-native'

const WINDOW_WIDTH = Dimensions.get('window').width

const guideLineBaseWidth = 375

export function scaleSize(size: number) {
    return (WINDOW_WIDTH / guideLineBaseWidth) * size
}

export function scaleFont(size: number) {
    return size * PixelRatio.getFontScale()
}
