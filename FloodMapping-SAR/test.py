import torch

from models.unet import UNet
from utils.dataset import FloodDataset
from utils.metrics import dice_score
from utils.visualize import show

device = "cuda" if torch.cuda.is_available() else "cpu"

model = UNet().to(device)
model.load_state_dict(torch.load("model.pth"))
model.eval()

dataset = FloodDataset("data/images", "data/masks")

img, mask = dataset[0]
img = img.unsqueeze(0).to(device)

with torch.no_grad():
    pred = model(img)

print("Dice Score:", dice_score(pred, mask.to(device)))

show(img.cpu()[0], mask, pred.cpu()[0])
