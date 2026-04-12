import torch
import torch.nn as nn
from torch.utils.data import DataLoader

from models.unet import UNet
from utils.dataset import FloodDataset

device = "cuda" if torch.cuda.is_available() else "cpu"

dataset = FloodDataset("data/images", "data/masks")
loader = DataLoader(dataset, batch_size=4, shuffle=True)

model = UNet().to(device)
optimizer = torch.optim.Adam(model.parameters(), lr=1e-4)
criterion = nn.BCELoss()

for epoch in range(10):
    total_loss = 0

    for img, mask in loader:
        img, mask = img.to(device), mask.to(device)

        pred = model(img)
        loss = criterion(pred, mask)

        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        total_loss += loss.item()

    print(f"Epoch {epoch + 1}, Loss: {total_loss:.4f}")

torch.save(model.state_dict(), "model.pth")
