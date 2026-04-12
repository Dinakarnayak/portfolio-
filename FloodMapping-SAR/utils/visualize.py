import matplotlib.pyplot as plt


def show(img, mask, pred):
    plt.figure(figsize=(10, 3))

    plt.subplot(1, 3, 1)
    plt.title("Input")
    plt.imshow(img[0], cmap="gray")

    plt.subplot(1, 3, 2)
    plt.title("Ground Truth")
    plt.imshow(mask[0], cmap="gray")

    plt.subplot(1, 3, 3)
    plt.title("Prediction")
    plt.imshow(pred[0], cmap="gray")

    plt.show()
