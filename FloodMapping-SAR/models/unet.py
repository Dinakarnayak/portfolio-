import torch
import torch.nn as nn


class UNet(nn.Module):
    def __init__(self):
        super().__init__()

        def block(in_c, out_c):
            return nn.Sequential(
                nn.Conv2d(in_c, out_c, 3, padding=1),
                nn.ReLU(),
                nn.Conv2d(out_c, out_c, 3, padding=1),
                nn.ReLU(),
            )

        self.e1 = block(1, 64)
        self.p1 = nn.MaxPool2d(2)

        self.e2 = block(64, 128)
        self.p2 = nn.MaxPool2d(2)

        self.e3 = block(128, 256)
        self.p3 = nn.MaxPool2d(2)

        self.b = block(256, 512)

        self.u3 = nn.ConvTranspose2d(512, 256, 2, 2)
        self.d3 = block(512, 256)

        self.u2 = nn.ConvTranspose2d(256, 128, 2, 2)
        self.d2 = block(256, 128)

        self.u1 = nn.ConvTranspose2d(128, 64, 2, 2)
        self.d1 = block(128, 64)

        self.out = nn.Conv2d(64, 1, 1)

    def forward(self, x):
        e1 = self.e1(x)
        e2 = self.e2(self.p1(e1))
        e3 = self.e3(self.p2(e2))

        b = self.b(self.p3(e3))

        d3 = self.u3(b)
        d3 = torch.cat([d3, e3], dim=1)
        d3 = self.d3(d3)

        d2 = self.u2(d3)
        d2 = torch.cat([d2, e2], dim=1)
        d2 = self.d2(d2)

        d1 = self.u1(d2)
        d1 = torch.cat([d1, e1], dim=1)
        d1 = self.d1(d1)

        return torch.sigmoid(self.out(d1))
