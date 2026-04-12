def dice_score(pred, target):
    pred = (pred > 0.5).float()
    smooth = 1e-6

    intersection = (pred * target).sum()
    return (2 * intersection + smooth) / (pred.sum() + target.sum() + smooth)
